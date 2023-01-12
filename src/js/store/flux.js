const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			item: '',
			description: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			fetchDescription: (e) => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch(e).then(res => {
					return res.json()
				}).then(data => {
					console.log(data)
					setStore({
						favorites: getStore().favorites,
						item: getStore().item,
						description: data.result.properties
					})
				})
			},
			setItem: (e) => {
				setStore({
					favorites: getStore().favorites,
					item: e,
					description: getStore().description
				})
			},
			addFavorite: (e) => {
				console.log(e)
				setStore({
					favorites: [...getStore().favorites, e],
					item: getStore().item,
					description: getStore().description
				})
			},
			removeFavorite: (e) => {
				setStore({
					favorites: getStore().favorites.filter(x => {
						return x !== e
					}),
					item: getStore().item,
					description: getStore().description
				})
			}
		}
	};
};

export default getState;
