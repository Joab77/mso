module.exports = {
    idNotAnObjectId: 'id form is not good',
    emptyFields: 'missing content',
    user: {
        nothing: 'no users available',
        notFound: (id) => `user ${id} not found`,
        created: (id) => `user ${id} created`,
        updated: (id) => `user ${id} updated`,
        deleted: (id) => `user ${id} deleted`,
        emailExisting: 'this address email already existing',
        noProperties: (id) => `user ${id} have no properties`,
        login: {
            emptyEmailOrPass: 'Please enter email and password',
            invalidEmailOrPass: 'Invalid email or password',
        }
    },
    property: {
        created: (id) => `property ${id} created`,
        notFound: (id) => `property ${id} not found`,
        updated: (id) => `property ${id}  updated`,
        deleted: (id) => `property ${id} deleted`,
        nothing: 'no properties available',
        nothingToRental: 'no properties to rental available',
        nothingToSell: 'no properties to sell available',
        nothingType: (type) => `no properties of ${type}  available`,
        nothingStatus: (status) => `no properties of ${status}  available`
    },
    category: {
        created: (id) => `categorie ${id} created`,
        notFound: (id) => `categorie ${id} not found`,
        updated: (id) => `categorie ${id}  updated`,
        deleted: (id) => `categorie ${id} deleted`,
        nothing: 'no categories available',
        nothingToRental: 'no categories to rental available',
        nothingToSell: 'no categorie to sell available',
        nothingType: (type) => `no categorie of ${type}  available`,
        nothingStatus: (status) => `no categorie of ${status}  available`
    },
    abnt: {
        created: (id) => `abonnement ${id} created`,
        notFound: (id) => `abonnement ${id} not found`,
        updated: (id) => `abonnement ${id}  updated`,
        deleted: (id) => `abonnement ${id} deleted`,
        nothing: 'no abonnements available'
    }
}
