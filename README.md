# Migrating from AngularJs to React
This repo is meant to demonstrate a technique of migrating an existing AngularJs application to a React application.

This technique is meant to allow developing new components/services within the React ecosystem and exposing them for utilization in the existing AngularJs application ecosystem.  
It also allows developing new components/services that take dependencies on existing AngularJs services.

## Basic Setup
You have an existing AngularJs application. This application currently depends on certain modules. We would be creating a new module for the existing AngularJs application to use. This module will be the wiring for the React ecosystem components/services to be utilized in the AngularJs ecosystem.