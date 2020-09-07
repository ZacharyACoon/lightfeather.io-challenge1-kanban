FROM python:3.8-slim

COPY . /backend
RUN pip install /backend


ENV PORT 23456
ENV ENCODED_DATA_FILE /data/encoded_data.json


VOLUME ["/data"]
CMD python -m backend ${ENCODED_DATA_FILE} ${PORT}
