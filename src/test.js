import firebase from 'firebase/app';
import 'firebase/firestore';


const firestore = firebase.firestore();

firestore
.collection('users')
.doc('ZXgW6X08fWU1IBi0yYXB')
.collection('cartList')
.doc('9syXgDslEwnhgThuJgZP');

firestore.doc('/users/ZXgW6X08fWU1IBi0yYXB/cartList/9syXgDslEwnhgThuJgZP');
firestore.collection('/users/ZXgW6X08fWU1IBi0yYXB/cartList');