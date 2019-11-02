import pymongo
 
client = pymongo.MongoClient("localhost", 27017)
db = client.contactlist
collection = db.essay
 
def save(name, category):
    collection.save({"name": name, "category": category})