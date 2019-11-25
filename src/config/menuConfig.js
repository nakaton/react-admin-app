const menulist = [
    {
        title: "Home",
        key: '/home',
        icon: 'home'
    },
    {
        title: "Products",
        key: '/products',
        icon: 'appstore',
        children:[
            {
                title: "Category",
                key: '/category',
                icon: 'bars'
            },
            {
                title: "Product",
                key: '/product',
                icon: 'coffee'
            }
        ]
    },
    {
        title: "User",
        key: '/user',
        icon: 'user'
    },
    {
        title: "Role",
        key: '/role',
        icon: 'skin'
    },
    {
        title: "Charts",
        key: '/charts',
        icon: 'area-chart',
        children:[
            {
                title: "Bar Chart",
                key: '/charts/bar',
                icon: 'bar-chart'
            },
            {
                title: "Line Chart",
                key: '/charts/line',
                icon: 'line-chart'
            },
            {
                title: "Pie Chart",
                key: '/charts/pie',
                icon: 'pie-chart'
            }
        ]
    }
]

export default menulist