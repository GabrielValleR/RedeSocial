import { createServer, Factory, Model } from 'miragejs';
import { faker } from '@faker-js/faker';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  avatar: string;
}

interface Comment {
  id: number;
  username: string;
  comment: string;
  created_at: string;
}

interface Album {
  id: number;
  image: string;
  cover: string;
}

interface Click {
  id: number;
  title: string;
  description: string;
  image: string;
  likers: string[];
}

interface Slider {
  id: number;
  image: string;
}

interface Category {
  id: number;
  name: string;
}

interface Story {
  id: number;
  user: {
    username: string;
    avatar: string;
  };
  image_uri: {
    full: string;
    small: string;
  };
  title: string;
  likes_count: number;
  coments_count: number;
}

interface Notification {
  user: {
    username: string;
    avatar: string;
  };
  action: string;
  click: { image: string };
}

interface Profile {
  name: string;
  username: string;
  avatar: string;
  bio: string;
  followers: number;
  following: number;
  clicks: number;
}

interface Follower {
  username: string;
  avatar: string;
  isFollowing: boolean;
}

interface Following {
  username: string;
  avatar: string;
}

interface Like {
  count: number;
}

export function makeServer() {
  const app_server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
      comment: Model.extend<Partial<Comment>>({}),
      album: Model.extend<Partial<Album>>({}),
      slider: Model.extend<Partial<Slider>>({}),
      click: Model.extend<Partial<Click>>({}),
      category: Model.extend<Partial<Category>>({}),
      story: Model.extend<Partial<Story>>({}),
      notification: Model.extend<Partial<Notification>>({}),
      profile: Model.extend<Partial<Profile>>({}),
      follower: Model.extend<Partial<Follower>>({}),
      following: Model.extend<Partial<Following>>({}),
      like: Model.extend<Partial<Like>>({}),
    },
    factories: {
      user: Factory.extend({
        name() {
          return faker.name.findName();
        },
        username() {
          return faker.internet.userName();
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        avatar() {
          return faker.internet.avatar();
        },
      }),
      comment: Factory.extend({
        avatar() {
          return faker.internet.avatar();
        },
        username() {
          return faker.internet.userName();
        },
        comment() {
          return faker.lorem.sentence(3);
        },
        create_at() {
          return faker.date.past();
        },
      }),
      album: Factory.extend({
        cover() {
          return faker.image.lorempicsum.image();
        },
        image() {
          return faker.image.lorempicsum.image();
        },
      }),
      slider: Factory.extend({
        image() {
          return faker.image.lorempicsum.image();
        },
      }),
      click: Factory.extend({
        title() {
          return faker.lorem.words(3);
        },
        description() {
          return faker.lorem.words(5);
        },
        image() {
          return faker.image.lorempicsum.image();
        },
        likers() {
          return [
            faker.internet.avatar(),
            faker.internet.avatar(),
            faker.internet.avatar(),
          ];
        },
      }),
      category: Factory.extend({
        name() {
          return `# ${faker.word.verb()}`;
        },
      }),
      story: Factory.extend({
        user() {
          return {
            username: faker.internet.userName(),
            avatar: faker.internet.avatar(),
          };
        },
        image_uri() {
          return {
            full: faker.image.lorempicsum.image(),
            small: faker.image.lorempicsum.image(25, 25),
          };
        },
        title() {
          return faker.lorem.sentence(4);
        },
        likes_count() {
          return faker.datatype.number({ max: 999 });
        },
        coments_count() {
          return faker.datatype.number({ max: 999 });
        },
      }),
      notification: Factory.extend({
        user() {
          return {
            username: faker.internet.userName(),
            avatar: faker.internet.avatar(),
          };
        },
        action() {
          return faker.random.arrayElement([
            'curtiu sua publicação',
            'fez um comentário',
            'seguiu você',
          ]);
        },
        click() {
          return {
            image:
              //@ts-ignore
              this.action !== 'seguiu você'
                ? faker.image.lorempicsum.image()
                : null,
          };
        },
      }),
      profile: Factory.extend({
        name() {
          return faker.name.findName();
        },
        username() {
          return faker.internet.userName();
        },
        bio() {
          return faker.lorem.sentence(3);
        },
        avatar() {
          return faker.internet.avatar();
        },
        followers() {
          return faker.datatype.number({ max: 999 });
        },
        following() {
          return faker.datatype.number({ max: 999 });
        },
        clicks() {
          return faker.datatype.number({ max: 999 });
        },
      }),
      follower: Factory.extend({
        username() {
          return faker.internet.userName();
        },
        avatar() {
          return faker.internet.avatar();
        },
        isFollowing() {
          return faker.datatype.boolean();
        },
      }),
      following: Factory.extend({
        username() {
          return faker.internet.userName();
        },
        avatar() {
          return faker.internet.avatar();
        },
      }),
      like: Factory.extend({
        count() {
          return faker.datatype.number({ max: 999 });
        },
      }),
    },
    seeds(server) {
      server.createList('user', 20);
      server.createList('comment', 20);
      server.createList('album', 25);
      server.createList('slider', 3);
      server.createList('click', 10);
      server.createList('category', 5);
      server.createList('story', 5);
      server.createList('notification', 25);
      server.createList('profile', 1);
      server.createList('follower', 25);
      server.createList('following', 25);
      server.createList('like', 1);
    },
    routes() {
      this.namespace = 'api/v1';
      this.timing = 750;

      this.get('/users');
      this.get('/comments');
      this.get('/albums');
      this.get('/sliders');
      this.get('/clicks');
      this.get('/categories');
      this.get('/stories');
      this.get('/notifications');
      this.get('/profiles/:id', (schema, request) => {
        let id = request.params.id;

        return schema.find('profile', id);
      });
      this.get('/followers');
      this.get('/followings');
      this.get('/likes/:id', (schema, request) => {
        let id = request.params.id;

        return schema.find('like', id);
      });

      this.namespace = '';
      this.passthrough();
    },
  });

  console.log('> Mirage Server Running....');

  return app_server;
}
