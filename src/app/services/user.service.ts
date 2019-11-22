import { Injectable } from '@angular/core';
import {UserModel} from '../interfaces/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

userList: UserModel[] = [
  {
    _id: '01',
    name: 'Md Iqbal Hossen',
    imgUrl: 'https://i.ibb.co/Rb0pTdd/Md-Iqbal.jpg',
    fbId: 'facebook.com',
    birthday: '20/10/1998',
    details: this.desc
  },
  {
    _id: '02',
    name: 'Abdus sobur',
    imgUrl: 'https://i.ibb.co/zJqBD5d/test.jpg',
    fbId: 'facebook.com',
    birthday: '20/10/1998',
    details: this.desc
  },
  {
    _id: '03',
    name: 'Sharmin Aktar',
    imgUrl: 'https://i.ibb.co/ynWqMTn/Westpac23-06-1744copy.jpg',
    fbId: 'facebook.com',
    birthday: '20/10/1998',
    details: this.desc
  },
  {
    _id: '04',
    name: 'Momenul Islam',
    imgUrl: 'https://i.ibb.co/KNhyXXn/444705-741265.jpg',
    fbId: 'facebook.com',
    birthday: '20/10/1998',
    details: this.desc
  },
  {
    _id: '05',
    name: 'Raju Ahmed',
    imgUrl: 'https://i.ibb.co/wyqRT1M/995586-746594.jpg',
    fbId: 'facebook.com',
    birthday: '20/10/1998',
    details: this.desc
  },
  {
    _id: '06',
    name: 'Mrs Riya Parvin',
    imgUrl: 'https://i.ibb.co/hgzPMJj/1480575146.jpg',
    fbId: 'facebook.com',
    birthday: '20/10/1998',
    details: this.desc
  },
  {
    _id: '07',
    name: 'Aminul Islam',
    imgUrl: 'https://i.ibb.co/dmZgRtK/temp-people-profile.jpg',
    fbId: 'facebook.com',
    birthday: '20/10/1998',
    details: this.desc
  },
  {
    _id: '08',
    name: 'Mahabuba Khatun',
    imgUrl: 'https://i.ibb.co/ThZZh9V/Nguyen-Mai-Linh-7944-160330-8x5-5cc.jpg',
    fbId: 'facebook.com',
    birthday: '20/10/1998',
    details: this.desc
  },

];

  constructor() { }

  getUserList() {
    return [...this.userList];
  }

  getUser(id: string) {
    return {
      ...this.userList.find(user => {
        return user._id === id;
      })
    };
  }
}
