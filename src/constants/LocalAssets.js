import React from "react";
import genericFunctions from "../helper/genericFunctions";

const SVG_DEFAULT_SIZE = 200;

export default {
  SVG: {
    // dashboardNightBG(height = SVG_DEFAULT_SIZE, width = SVG_DEFAULT_SIZE,) { return <NightSVG height={height} width={width} /> }
  },

  JPG: {
    mainPageBackground: require("../../assets/images/mainPageBackground.png"),
  },

  ICON: {
    menu: require("../../assets/icons/menu.png"),
    security: require("../../assets/icons/security.png"),
    help: require("../../assets/icons/help.png"),
    about: require("../../assets/icons/about.png"),
    mapMarkerHollow: require("../../assets/icons/mapMarkerHollow.png"),
    creditCard: require("../../assets/icons/creditCard.png"),
    send: require("../../assets/icons/send.png"),
  },

  PROFILE_PICTURES: {
    profile1: require("../../assets/images/profilePictures/1.png"),
    profile2: require("../../assets/images/profilePictures/2.png"),
    profile3: require("../../assets/images/profilePictures/3.png"),
    profile4: require("../../assets/images/profilePictures/4.png"),
    profile5: require("../../assets/images/profilePictures/5.png"),
    profile6: require("../../assets/images/profilePictures/6.png"),
    profile7: require("../../assets/images/profilePictures/7.png"),
    profile8: require("../../assets/images/profilePictures/8.png"),
    profile9: require("../../assets/images/profilePictures/9.png"),
    profile10: require("../../assets/images/profilePictures/10.png"),
    profile11: require("../../assets/images/profilePictures/11.png"),
    profile12: require("../../assets/images/profilePictures/12.png"),
  },
  BOOKS: {
    book1: require("../../assets/images/books/1.jpg"),
    book2: require("../../assets/images/books/2.jpg"),
    book3: require("../../assets/images/books/3.png"),
    book4: require("../../assets/images/books/4.jpg"),
    book5: require("../../assets/images/books/5.jpg"),
    book6: require("../../assets/images/books/6.jpg"),
    book7: require("../../assets/images/books/7.jpg"),
    book8: require("../../assets/images/books/8.jpg"),
    book9: require("../../assets/images/books/9.jpg"),
  },

  BOTTOMTAB: {
    clientSelected: require("../../assets/icons/bottomTab/clientSelected.png"),
    chatSelected: require("../../assets/icons/bottomTab/chatSelected.png"),
    notificationSelected: require("../../assets/icons/bottomTab/notificationSelected.png"),
    profileSelected: require("../../assets/icons/bottomTab/profileSelected.png"),
    storeSelected: require("../../assets/icons/bottomTab/storeSelected.png"),
    searchSelected: require("../../assets/icons/bottomTab/searchSelected.png"),

    client: require("../../assets/icons/bottomTab/client.png"),
    chat: require("../../assets/icons/bottomTab/chat.png"),
    notification: require("../../assets/icons/bottomTab/notification.png"),
    profile: require("../../assets/icons/bottomTab/profile.png"),
    store: require("../../assets/icons/bottomTab/store.png"),
    search: require("../../assets/icons/bottomTab/search.png"),
  },

  THUMBNAIL: {
    thumbnail1: require("../../assets/images/thumbnail/1.png"),
    thumbnail2: require("../../assets/images/thumbnail/2.png"),
    thumbnail3: require("../../assets/images/thumbnail/3.png"),
    thumbnail4: require("../../assets/images/thumbnail/4.png"),
    thumbnail5: require("../../assets/images/thumbnail/5.png"),
    thumbnail6: require("../../assets/images/thumbnail/6.png"),
  },
  DRAWER: {
    article: require("../../assets/icons/drawer/article.png"),
    blog: require("../../assets/icons/drawer/blog.png"),
    camera: require("../../assets/icons/drawer/camera.png"),
    consultation: require("../../assets/icons/drawer/consultation.png"),
    delete: require("../../assets/icons/drawer/delete.png"),
    inbox: require("../../assets/icons/drawer/inbox.png"),
    logout: require("../../assets/icons/drawer/logout.png"),
    notification: require("../../assets/icons/drawer/notification.png"),
    orders: require("../../assets/icons/drawer/orders.png"),
    setings: require("../../assets/icons/drawer/setings.png"),
  },
}; //end of EXPORT DEFAULT

export const randomBooks = () => {
  const tb = {
    book1: require("../../assets/images/books/1.jpg"),
    book2: require("../../assets/images/books/2.jpg"),
    book3: require("../../assets/images/books/3.png"),
    book4: require("../../assets/images/books/4.jpg"),
    book5: require("../../assets/images/books/5.jpg"),
    book6: require("../../assets/images/books/6.jpg"),
    book7: require("../../assets/images/books/7.jpg"),
    book8: require("../../assets/images/books/8.jpg"),
    book9: require("../../assets/images/books/9.jpg"),
  };
  return tb[`book${genericFunctions.getRandomInt(1, 9)}`];
}; //end of randomBooks

export const randomProfilePictues = () => {
  const tb = {
    profile1: require("../../assets/images/profilePictures/1.png"),
    profile2: require("../../assets/images/profilePictures/2.png"),
    profile3: require("../../assets/images/profilePictures/3.png"),
    profile4: require("../../assets/images/profilePictures/4.png"),
    profile5: require("../../assets/images/profilePictures/5.png"),
    profile6: require("../../assets/images/profilePictures/6.png"),
    profile7: require("../../assets/images/profilePictures/7.png"),
    profile8: require("../../assets/images/profilePictures/8.png"),
    profile9: require("../../assets/images/profilePictures/9.png"),
    profile10: require("../../assets/images/profilePictures/10.png"),
    profile11: require("../../assets/images/profilePictures/11.png"),
    profile12: require("../../assets/images/profilePictures/12.png"),
  };
  return tb[`profile${genericFunctions.getRandomInt(1, 12)}`];
}; //end of randomProfilePictues

export const randomThumnail = () => {
  const tb = {
    thumbnail1: require("../../assets/images/thumbnail/1.png"),
    thumbnail2: require("../../assets/images/thumbnail/2.png"),
    thumbnail3: require("../../assets/images/thumbnail/3.png"),
    thumbnail4: require("../../assets/images/thumbnail/4.png"),
    thumbnail5: require("../../assets/images/thumbnail/5.png"),
  };
  return tb[`thumbnail${genericFunctions.getRandomInt(1, 5)}`];
}; //end of randomThumnail
