import io
import json
import os

import datetime
import time
from flask import Flask, render_template, request, url_for, redirect

app = Flask(__name__)

resume_pdf_link = 'https://docs.google.com/document/d/1L9UuWWMxRT7h7D92ybn9dx_WL8VCkAiSIsD_8gkJwWI/edit#heading=h.5x0d5h95i329'


@app.route('/')
def index():
    age = int((datetime.date.today() - datetime.date(1994, 1, 1)).days / 365)
    return render_template('home.html', age=age)


@app.route('/timeline')
def timeline():
    return render_template('timeline.html', resume_pdf_link=resume_pdf_link)


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


def get_static_file(path):
    site_root = os.path.realpath(os.path.dirname(__file__))
    return os.path.join(site_root, path)


def get_static_json(path):
    return json.load(open(get_static_file(path)))


if __name__ == "__main__":
    print("running py app")
    app.run(host="0.0.0.0", port=8000, debug=True)
