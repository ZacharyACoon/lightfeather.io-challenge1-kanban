import configuration
import version
from flask import Flask, request, jsonify


# maps tasks by uuid, for later updating
tasks = dict(map(lambda o: (o["uuid"], o), configuration.data))


app = Flask(version.NAME)
app.config["JSONIFY_PRETTYPRINT_REGULAR"] = True


@app.route("/api/kanban", methods=["GET"])
def api_kanban_get():
    # retrieve current state of all tasks
    return jsonify(list(tasks.values()))


@app.route("/api/kanban", methods=["POST"])
def api_kanban_post():
    # update a single task
    return 501


if __name__ == "__main__":
    app.run()
