# syntax=docker/dockerfile:1
FROM python:3.10-alpine
WORKDIR /meomgnt
COPY . .
RUN pip3 install -r requirements.txt
EXPOSE 5000
ENV FLASK_APP=meo-mgmt.py
CMD ["flask", "run", "--host", "0.0.0.0"]