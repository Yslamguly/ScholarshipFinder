export const UserMenuItems = [
    {
        type:'anchor',
        title:'My wish list',
        path:'/wishList'
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
