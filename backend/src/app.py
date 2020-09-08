from . import configuration
from flask import Flask, jsonify, request
from flask_cors import CORS

# maps tasks by uuid, for later updating
tasks = dict(map(lambda o: (o["uuid"], o), configuration.data))


app = Flask("backend")
app.config["JSONIFY_PRETTYPRINT_REGULAR"] = True
cors = CORS(app)


@app.route("/api/kanban", methods=["GET"])
def api_kanban_get():
    # retrieve current state of all tasks
    return jsonify(list(tasks.values()))


@app.route("/api/kanban", methods=["POST"])
def api_kanban_post():
    # update a single task
    task = request.json
    tasks[task["uuid"]] = task
    return "", 200


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=configuration.port)
