"""
    Este archivo levantará el servidor Flask y cargará la plantilla principal.
    """
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    """
    Página principal: mostrará el dropdown y las gráficas.
    """
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)
