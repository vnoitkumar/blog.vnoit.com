---
title: 'Redis'
description: 'Basics of Redis'
avgReadingTime: '4 min read'
date: '2020-06-20'
---

## [Why Redis?](https://www.youtube.com/watch?v=OG610oe_kxs)

- Redis is blazingly fast it's written in C, runs entirely in memory and is optimized to deliver millions of operations with sub millisecond latency with single standard server.

- Pre-built data structures for popular use cases which are used by developer like LEGO building blocks when creating new apps.

- These built-in data structures include lists, sets, sorted sets, hashes, hyperloglogs, bitmaps, geospatial indexes, bitfields, streams and strings.

- Redis commends allow data to be processed on the database level rather then the application level, reducing coding effort, code complexity and bandwidth requirements.

- Redis can be extend infinitely.

- With Redis Modules that expand Redis infinitely, and it allows to add custom functionality and structures.

- And Modules that do everything from search to machine learning, security, JSON to graph data processing and more.

- Has client libraries for every languages.

- The hottest Redis uses includes real time analytics, High speed transactions, High speed data ingest, Message queues, Session storage, In-app social functionality, Application job management, Search, Machine learning and caching.

- Redis has been benchmarked as the world's fastest data base.

---

## What is Redis

- Redis is an open source, in-memory data structure store used as database, cache and message broker

- NoSQL Key/Value Store with some advance features.

- The different between MongoDB and Redis is Mongo DB is a disk based document store while Redis is a memory based.

- Redis does not support any built-in data encryption

---

## [Data types in Redis](https://redis.io/topics/data-types)

1. Lists
2. Sets
3. Sorted sets
4. Hashes
5. Hyperlogs
6. Bitmaps
7. Geospatial indexes
8. Bitfields
9. Streams
10. Strings

## [Installing Redis](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-redis-on-ubuntu-18-04)

Basic commends to install redis.

```bash
$ sudo apt update

$ sudo apt install redis-server

$ redis-server # start redis server

$ redis-cli # opens a redis prompt
```

## Basic Redis CLI

1. [SET](#SET)
2. [SETNX](#SETNX) - **SET** if **N**ot e**X**ists
3. [GET](#GET)
4. [DEL](#DEL)
5. [EXISTS](#EXISTS)
6. [MSET](#MSET) - **M**ulti **SET**
7. [MSETNX](#MSETNX) - **M**ulti **SET** if **N**ot e**X**ists
8. [MGET](#MGET) - **M**ulti **GET**

**Note** : _Other keywords are self explanatory_

### [SET](https://redis.io/commands/set)

1. Set key to hold the string value.
2. If key already holds a value, it is overwritten, regardless of its type.
3. **Time complexity: O(1)**

```bash
SET key value # Syntax


SET mykey "Hello" # Examples
```

---

### [SETNX](https://redis.io/commands/setnx)

1. Set key to hold string value if key does not exist.
2. In that case, it is equal to SET.
3. When key already holds a value, no operation is performed.
4. SETNX is short for "**SET** if **N**ot e**X**ists".
5. **Time complexity: O(1)**

```bash
SETNX key value # Syntax


SETNX mykey "Hello" # Examples
```

---

### [GET](https://redis.io/commands/get)

1. Get the value of key.
2. If the key does not exist the special value nil is returned.
3. An error is returned if the value stored at key is not a string, because GET only handles string values.
4. **Time complexity: O(1)**

```bash
GET key # Syntax


GET mykey # Example
```

---

### [DEL](https://redis.io/commands/del)

1. Removes the specified keys.
2. A key is ignored if it does not exist.
3. **Time complexity: O(N)** where N is the number of keys that will be removed.
4. Removing a single key that holds a string value is **O(1)**.

```bash
DEL key [key ...] # Syntax


DEL key1 key2 key3 # Example
```

---

### [EXISTS](https://redis.io/commands/exists)

1. Returns 1 if key exists, 0 if the key does not exist.
2. **Time complexity: O(1)**

```bash
EXISTS key [key ...] # Syntax


EXISTS key1 key2 # Example
```

---

### [MSET](https://redis.io/commands/mset)

1. Sets the given keys to their respective values.
2. Replaces existing values with new values, just as regular SET.
3. **Time complexity: O(N)** where N is the number of keys to set.

```bash
MSET key value [key value ...] # Syntax


MSET key1 "Hello" key2 "World" # Example
```

---

### [MSETNX](https://redis.io/commands/msetnx)

1. Sets the given keys to their respective values.
2. **Will not perform any operation at all even if just a single key already exists.**
3. **Time complexity: O(N)** where N is the number of keys to set.

```bash
MSETNX key value [key value ...] # Syntax


MSETNX key1 "Hello" key2 "there" # Example
```

---

### [MGET](https://redis.io/commands/mget)

1. Returns the values of all specified keys.
2. For every key that does not hold a string value or does not exist, the special value nil is returned.
3. **Time complexity: O(N)** where N is the number of keys to retrieve.

```bash
MGET key [key ...] # Syntax


MGET key1 key2 # Example
```

## Resource

- [Why Redis?](https://www.youtube.com/watch?v=OG610oe_kxs)
- [Learn Redis from Scratch](https://www.eduonix.com/new_dashboard/learn-redis-from-scratch)
- [Awesome cheat sheet redis](https://github.com/LeCoupa/awesome-cheatsheets/blob/master/databases/redis.sh)
