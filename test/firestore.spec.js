import MockFirebase from 'mock-cloud-firestore';

import { savePost, loadPostHome } from '../src/controller/firestore.js';


const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        a01: {
          uid: 'user1',
          user: 'Mariana',
          url: '',
          privacy: '0',
          photo: '',
          likes: [],
          email: '',
          datetime: '202051919282',
          date: '19/5/2020',
          content: 'Probando post',
        },
        a02: {
          uid: 'user2',
          user: 'Edward',
          url: '',
          privacy: '1',
          photo: '',
          likes: [],
          email: '',
          datetime: '202051919282',
          date: '19/5/2020',
          content: 'Probando post',
        },
      },
    },
  },
};
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

describe('Publicar post', () => {
  // eslint-disable-next-line no-unused-vars
  it('Debería poder publicar un post', done => savePost('user3', 'Mirella', '', '0', '', [], '', '', '', 'prueba hola')
    .then(() => {
      const callback = (post) => {
        console.log (post);
        // const result = post.find(element => element.post === 'prueba hola');
        // // expect(result.uid).toBe('user3');
        // // done();
      };
      loadPostHome(callback);
    }));
});
