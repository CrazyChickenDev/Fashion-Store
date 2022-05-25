import banner1 from '../../assets/images/demos/demo-6/banners/Yousnooze.png'
import banner2 from '../../assets/images/demos/demo-6/banners/NFT.png'


const INITIAL_STATE ={
    sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 5,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 4,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'You Snooze You Lose Collection',
          imageUrl: banner1,
          size: 'large',
          id: 2,
          linkUrl: 'shop/womens'
        },
        {
          title: 'NFT Collection',
          imageUrl: banner2,
          size: 'large',
          id: 1,
          linkUrl: 'shop/mens'
        }
      ]

}

const directoryReducer = (state=INITIAL_STATE, action)=>{
    switch (action.type){
        default:
            return state;
    }
}

export default directoryReducer;