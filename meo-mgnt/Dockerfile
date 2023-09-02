# syntax=docker/dockerfile:1
FROM python:3.10-alpine
RUN mkdir /app1
WORKDIR /app1
COPY . /app1
#COPY ./requirements.txt /home/requirements.txt
# ENV FLASK_APP=app.py
RUN pip install -r requirements.txt
EXPOSE 5000
# ENTRYPOINT FLASK_APP=/app1/app.py flask run
# CMD ["python", "/app1/app.py"]
CMD ["flask", "--app", "meo-mgmt", "run"]