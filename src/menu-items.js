export default {
    items: [
        {
            id: 'support',
            title: 'Support',
            type: 'group',
            icon: 'icon-support',
            children: [
                {
                    id: 'COVID_19',
                    title: 'COVID_19',
                    type: 'item',
                    url: '/COVID_19_tracker_india',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar'
                },
                // {
                //     id: 'sample-page',
                //     title: 'Sample Page',
                //     type: 'item',
                //     url: '/sample-page',
                //     classes: 'nav-item',
                //     icon: 'feather icon-sidebar'
                // },
                {
                    id: 'user-task',
                    title: 'User Task',
                    type: 'item',
                    url: '/user-task',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar'
                },                
                // {
                //     id: 'menu-level',
                //     title: 'Menu Levels',
                //     type: 'collapse',
                //     icon: 'feather icon-menu',
                //     children: [
                //         {
                //             id: 'menu-level-1.1',
                //             title: 'Menu Level 1.1',
                //             type: 'item',
                //             url: '#!',
                //         },
                //         {
                //             id: 'menu-level-1.2',
                //             title: 'Menu Level 2.2',
                //             type: 'collapse',
                //             children: [
                //                 {
                //                     id: 'menu-level-2.1',
                //                     title: 'Menu Level 2.1',
                //                     type: 'item',
                //                     url: '#',
                //                 },
                //                 {
                //                     id: 'menu-level-2.2',
                //                     title: 'Menu Level 2.2',
                //                     type: 'collapse',
                //                     children: [
                //                         {
                //                             id: 'menu-level-3.1',
                //                             title: 'Menu Level 3.1',
                //                             type: 'item',
                //                             url: '#',
                //                         },
                //                         {
                //                             id: 'menu-level-3.2',
                //                             title: 'Menu Level 3.2',
                //                             type: 'item',
                //                             url: '#',
                //                         }
                //                     ]
                //                 }
                //             ]
                //         }
                //     ]
                // },
                // {
                //     id: 'disabled-menu',
                //     title: 'Disabled Menu',
                //     type: 'item',
                //     url: '#',
                //     classes: 'nav-item disabled',
                //     icon: 'feather icon-power'
                // }
            ]
        }
    ]
}