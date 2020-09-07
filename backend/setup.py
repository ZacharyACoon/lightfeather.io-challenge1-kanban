from setuptools import setup


setup(
    name="backend",
    description='LightFeather.io - Interview Challenge - Backend',
    url='',
    license='',
    author='ZacharyACoon',
    author_email='zacharyacoon@gmail.com',
    version="0.0.2",
    package_dir={"backend": "src"},
    packages=["backend"],
    install_requires=[
        "flask",
        "flask-cors",
    ],
)
