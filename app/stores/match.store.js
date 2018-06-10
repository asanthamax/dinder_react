/**
 * Created by asantha on 6/10/2018.
 */
import {action} from 'mobx';
import firebase from 'firebase';
import MobxFirebaseStore from 'mobx-firebase-store'

export default class MatchStore extends MobxFirebaseStore{


    constructor(){

        super(firebase.database().ref())
        firebase.auth().onAuthStateChanged((user)=>{

            this.user = user;
        })
    }

    resolveFirebaseQuery(sub){

        return this.child(sub.path).orderByChild(('viewedBy/'+this.user.id).equalTo(null))
    }

    @action
    markViewed(post){

        let updates = {};
        updates['viewedBy/'+this.user.uid] = true;
        this.fb.child('post').child(post).update(updates)
    }

    subs(){

        return [{

            subKey: 'matches',
            path: 'posts',
            asList: true,
            user: this.user
        }]
    }
}