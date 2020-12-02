import numpy as np
from flask import Flask, request
import pickle

from flask_restful import Api
from flask_cors import CORS


app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})
api = Api(app)


model = pickle.load(open('615_ryan.pkl', 'rb'))


@app.route('/predict',methods=['POST'])
def results():

    text = str(df_subset_biden.text)
    wordcloud = WordCloud(max_font_size=100, max_words=500, scale=10, relative_scaling=.6, background_color="black", colormap = "rainbow").generate(text)
    plt.figure(figsize=(15,10))plt.imshow(wordcloud, interpolation='bilinear')plt.axis("off")plt.show()

    Politicians = ['Donald Trump', 'Joe Biden']
    lis_pos = [positive_per1, positive_per2]
    lis_neg = [negative_per1, negative_per2]

    fig = go.Figure(data=[
        go.Bar(name='Positive', x=Politicians, y=lis_pos),
        go.Bar(name='Negative', x=Politicians, y=lis_neg)
    ])


# Change the bar mode
fig.update_layout(barmode='group')
if __name__ == "__main__":
    app.run(host="0.0.0.0",port=8000)
