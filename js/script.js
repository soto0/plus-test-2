const nftBlocks = document.querySelector('.nft__container');

const nftData = [
    {
        id: 1,
        largeIcon: 'images/large.png',
        title: 'Без слов',
        userIcon: 'images/user.png',
        userName: 'Настя Ивлеева Вячеславовна',
        check: true,
        rarity: 'images/rarity.svg',
        price: 500
    },
    {
        id: 2,
        largeIcon: 'images/large.png',
        title: 'Без слов',
        userIcon: 'images/user.png',
        userName: 'Настя Ивлеева Вячеславовна',
        check: true,
        rarity: 'images/rarity.svg',
        price: 500
    },
    {
        id: 3,
        largeIcon: 'images/large.png',
        title: 'Без слов',
        userIcon: 'images/user.png',
        userName: 'Настя Ивлеева Вячеславовна',
        check: true,
        rarity: 'images/rarity.svg',
        price: 500
    },
    {
        id: 4,
        largeIcon: 'images/large.png',
        title: 'Без слов',
        userIcon: 'images/user.png',
        userName: 'Настя Ивлеева Вячеславовна',
        check: true,
        rarity: 'images/rarity.svg',
        price: 500
    },
    {
        id: 5,
        largeIcon: 'images/large.png',
        title: 'Без слов',
        userIcon: 'images/user.png',
        userName: 'Настя Ивлеева Вячеславовна',
        check: true,
        rarity: 'images/rarity.svg',
        price: 500
    },
    {
        id: 6,
        largeIcon: 'images/large.png',
        title: 'Без слов',
        userIcon: 'images/user.png',
        userName: 'Настя Ивлеева Вячеславовна',
        check: true,
        rarity: 'images/rarity.svg',
        price: 500
    },
    {
        id: 7,
        largeIcon: 'images/large.png',
        title: 'Без слов',
        userIcon: 'images/user.png',
        userName: 'Настя Ивлеева Вячеславовна',
        check: true,
        rarity: 'images/rarity.svg',
        price: 500
    },
    {
        id: 8,
        largeIcon: 'images/large.png',
        title: 'Без слов',
        userIcon: 'images/user.png',
        userName: 'Настя Ивлеева Вячеславовна',
        check: true,
        rarity: 'images/rarity.svg',
        price: 500
    }
]


nftBlocks.innerHTML = nftData.map(nft => {
    return (
        `
            <div class="nft__block">
                <div class="nft__top">
                    <img src="${nft.largeIcon}" alt="large image" class="nft__large_icon">
                </div>
                <h1 class="nft__title">${nft.title}</h1>
                <div class="nft__user_block">
                    <div class="nft__user_left">
                            <img src="${nft.userIcon}" alt="user image" class="nft__user_icon">
                    </div>
                    <div class="nft__user_right">
                        <h2 class="nft__user_name">${nft.userName}</h2>
                        ${nft.check ? '<p class="nft__user_check">проверено</p>' : ''}
                    </div>
                </div>
                <div class="nft__info_block">
                    <div class="nft__info nft__rarity">
                        <h3 class="nft__info_title">Редкость:</h3>
                        <img src="${nft.rarity}" alt="rarity" class="rarity">
                    </div>
                    <div class="nft__info nft__price">
                        <h3 class="nft__info_title">Цена</h3>
                        <p class="price">от ${nft.price} ₽</p>
                    </div>
                </div>
                <button type="button" class="btn btn-primary nft__btn">Купить</button>
            </div>
        `
    )
}).join('');