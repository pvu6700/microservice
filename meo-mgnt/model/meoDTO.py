import pymongo

dbconnect = pymongo.MongoClient('mongodb://localhost:27017/')
meodb = dbconnect['meodb']
meomgnt_collection = meodb['meomgnt']

class Meo():
    name = ''
    price = int
    quantity = int

    def __init__(self, name, price, quantity) :
        self.name = name
        self.price = price
        self.quantity = quantity

    def get_name(self):
        return self.name
    def get_price(self):
        return self.price
    def get_quantity(self):
        return self.quantity
    
    def set_name(self, name):
        self.name = name
    def set_price(self, price):
        self.name = price
    def set_quantity(self, quantity):
        self.name = quantity
    
    def getMeo(name):
        try:
            return meomgnt_collection.find_one({'name': name})
        except Exception as e:
            return e
    
    def getMeos():
        try:
            return meomgnt_collection.find()
        except Exception as e:
            return e
    
    def addMeo(Meo):
        meo_data = {
            'name': Meo.name,
            'price': Meo.price,
            'quantity': Meo.quantity
        }
        try:
            meomgnt_collection.insert_one(meo_data)
        except Exception as e:
            return e