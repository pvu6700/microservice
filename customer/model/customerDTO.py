from dataclasses import dataclass
import pymongo

dbconnect = pymongo.MongoClient('mongodb://localhost:27017/')
meodb = dbconnect['meodb']
meomgnt_collection = meodb['meomgnt']
customer_collection = meodb['customer']

@dataclass
class Customer:
    username: str
    status: bool