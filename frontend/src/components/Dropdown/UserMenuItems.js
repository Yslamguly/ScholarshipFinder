export const UserMenuItems = [
    {
        type:'anchor',
        title:'My wish list',
        path:'/MyWishList'
    },
    {
        type:'button',
        title:'Sign out',
        onClickHandler: function (){
            sessionStorage.removeItem('user')
            window.location.reload()
        }
    }
]
