FROM python:3.6.7

RUN mkdir -p /home/project/web
WORKDIR /home/project/web
COPY requirements.txt /home/project/web
RUN pip install --no-cache-dir -r requirements.txt

COPY . /home/project/web
