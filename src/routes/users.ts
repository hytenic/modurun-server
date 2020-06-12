import signup from '../controller/users/signup';
import signin from '../controller/users/signin';
import user from '../controller/users/user';
import userUrl from '../controller/tracks/userUrl';
import signout from '../controller/users/signout';

const router = require('express').Router();

router.post('/signin', signin.post);
router.post('/signup', signup.post);
router.patch('/user/name', user.patch);
router.get('/user/exist', user.get);
router.get('/signout', signout.get);

router.post('/tracks', userUrl.post);
router.delete('/tracks', userUrl.delete);
router.patch('/tracks', userUrl.patch);
router.get('/tracks/:userId', userUrl.get);
router.post('/tracks/rate', userUrl.postRate);
export default router;
