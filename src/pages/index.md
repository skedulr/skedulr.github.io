# Skedulr : A platform-agnostic chatbot

![](/full-logo.png)

## Introduction

NITCbase is a Relational Database Management System Implementation (RDBMS) project that is intended to help an undergraduate student understand the design and data structures of an elementary RDBMS by implementing one herself.

A step-by-step implementation roadmap of the project guides you through various stages of implementation of the RDBMS. The documentation of the project includes tutorials that help you to assimilate the concepts as well as the data structures and design details that you need to understand at each phase of the project. The complete design and specification of the RDBMS and its various component subsystems are also documented and made available.

NITCbase follows a seven layer design, with the basic capabilities of a standard relational database management system which includes, creation and deletion of tables, inserting records, selection queries and indexing using B+ Tree. The final RDBMS implemented by you will support elementary SQL queries such as create, drop, alter, insert, select, project, equi-join and also the queries for B+ Tree based Indexing such as create index and drop index. Currently NITCbase does not support concurrency.

## What are you building

The seven layer design of NITCbase starts with the Physical layer at the bottom, progresses to Buffer layer, B+tree layer, Block access layer, Cache layer, Algebra layer and Schema layer at the intermediate levels and a Front-end command-line interface for interacting with the users at the top.
