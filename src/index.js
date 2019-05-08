var treeData =[
    {
        title: '0-0',
        key: '0-0',
        children: [
            {
                title: '0-0-0',
                key: '0-0-0',
                children: [
                    { title: '0-0-0-0', key: '0-0-0-0' },
                    { title: '0-0-0-1', key: '0-0-0-1' },
                    { title: '0-0-0-2', key: '0-0-0-2',
                        children: [
                            { title: '0-0-0-2-0', key: '0-0-0-2-0'},
                            { title: '0-0-0-2-1', key: '0-0-0-2-1'}
                        ]
                    },
                ],
            }, 
            {
                title: '0-0-1',
                key: '0-0-1',
                children: [
                    { title: '0-0-1-0', key: '0-0-1-0' },
                    { title: '0-0-1-1', key: '0-0-1-1' },
                    { title: '0-0-1-2', key: '0-0-1-2' },
                ],
            }, 
            {
                title: '0-0-2',
                key: '0-0-2',
            }],
        }, 
        {
                title: '0-1',
                key: '0-1',
                children: [
                    { title: '0-1-0-0', key: '0-1-0-0' },
                    { title: '0-1-0-1', key: '0-1-0-1' },
                    { title: '0-1-0-2', key: '0-1-0-2',
                        children: [
                            { title: '0-1-0-2-0', key: '0-1-0-2-0'}
                        ]
                    },
                ],
        }, 
        {
            title: '0-2',
            key: '0-2',
            children: [
                { title: '0-2-0', key: '0-2-0'},
                { title: '0-2-1', key: '0-2-1',
                    children: [
                        { title: '0-2-1-0', key: '0-2-1-0' },
                        { title: '0-2-1-1', key: '0-2-1-1',
                            children: [
                                { title: '0-2-1-1-0', key: '0-2-1-1-0'}
                            ]
                        },
                        { title: '0-2-1-2', key: '0-2-1-2',
                            children: [
                                { title: '0-2-1-2-0', key: '0-2-1-2-0'}
                            ]
                        }
                    ]
                }
            ]
        }
    ]

/**
 * 获取指定元素的所有父级对象的索引
 * $selectKey   要匹配的元素
 */
getParent = ($selectKey) => {
    for (let i = 0;i < treeData.length;i++) {
        let layer = 0;
        let posIndx = []
        let item = treeData[i];
        console.log(item.key)
        if (item.key == $selectKey[0]) {
            return [];
        } else {
            let res = this.scanTree(item, $selectKey[0], i, layer, posIndx);
            if (res) return res;
        }
    }
}

/**
 * 扫描树下面的孩子对象
 * $item    要递归遍历的对象
 * $key     要匹配的键值
 * $index   当前对象所在数组的索引
 * $layer   遍历到哪一级孩子对象
 * $posIndx 用来存储匹配到的元素的所有父级的索引集合
 */
scanTree = ($item, $key, $index, $layer, $posIndx) => {
    console.log('layer', $layer)
    if (!$item.children) {
        // $layer -= 1;
        return false;
    }
    console.log('--------------有children-------------------');
    console.log('layer', $layer)
    $posIndx[$layer] = $index;
    for (let i = 0; i < $item.children.length;i++) {
        let item = $item.children[i];
        if (item.key == $key) {
            console.log('找到节点,节点位置是：',$index, i)
            return $posIndx;
        } else {
            console.log('深入到子节点')
            let layer = $layer + 1;
            let node = this.scanTree(item, $key, i, layer, $posIndx)
            if (node) return node;
        }
    }
}
let posIndx = getParent(['0-1-0-2-0'])
console.log(posIndx)