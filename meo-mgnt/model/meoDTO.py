from sqlalchemy import create_engine
from sqlalchemy import Column, String, Integer
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from marshmallow import Schema, fields

Engine = create_engine('sqlite:///meo.sqlite3', echo=True)

Session = sessionmaker(bind = Engine)

Base = declarative_base()

class Meo(Base):
    __tablename__ = "meo"
    id = Column(Integer, primary_key = True)
    name = Column(String)
    price = Column(Integer)
    quantity = Column(Integer)

    def __init__(self, name, price, quantity) :
        self.name = name
        self.price = price
        self.quantity = quantity


class MeoSchema(Schema):
    id = fields.Number()
    name = fields.Str()
    price = fields.Number()
    quantity = fields.Number()

meo_schema = MeoSchema()
meos_schema = MeoSchema(many = True)