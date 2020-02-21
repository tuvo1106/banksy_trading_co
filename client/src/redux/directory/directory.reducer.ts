import { menuItem } from "../../interfaces/menuItem"

interface state {
  sections: menuItem[]
}

export const INITIAL_STATE: state = {
  sections: [
    {
      title: "watches",
      imageUrl: "https://i.imgur.com/mArqWFq.jpg",
      id: 1,
      linkUrl: "shop/watches"
    },
    {
      title: "ties",
      imageUrl: "https://i.imgur.com/041j71t.jpg",
      id: 2,
      linkUrl: "shop/ties"
    },
    {
      title: "shoes",
      imageUrl: "https://i.imgur.com/oIPTx02.jpg",
      id: 3,
      linkUrl: "shop/shoes"
    },
    {
      title: "casual",
      imageUrl: "https://i.imgur.com/IRjowMk.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/casual"
    },
    {
      title: "professional",
      imageUrl: "https://i.imgur.com/orUYSk9.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/professional"
    }
  ]
}

const directoryReducer = (state = INITIAL_STATE, action: any): state => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryReducer
