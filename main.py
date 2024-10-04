from unicodedata import category

import pandas as pd

from fastapi import FastAPI
import random


app = FastAPI()



@app.get("/")
def root():
    return {"Hello": "World"}

@app.get("/random")
def randomJoke():

    return{category: joke}

@app.get("/dad-joke")
def randomDadJoke():
    columns = ['Dad Jokes']
    df = pd.read_csv("joke_database.csv", usecols=columns)
    joke = df.sample(n=1)
    return{"Dad Joke": joke}
