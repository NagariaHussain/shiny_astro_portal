from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in shiny_astro_portal/__init__.py
from shiny_astro_portal import __version__ as version

setup(
	name="shiny_astro_portal",
	version=version,
	description="Astro Integrated in a Frappe App",
	author="Hussain Nagaria",
	author_email="hussain@frappe.io",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
