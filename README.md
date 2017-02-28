# README

## Prerequisites
* Rails 5
* Ruby >=2.2
* Foreman gem
* NodeJS
* Yarn

## Instructions to install and configure prerequisites or dependencies, if any

After downloading the zip file containing the project, unzip it on the desired directory.

Then cd into the directory and run bundle and yarn
```
  cd ticket_master
  bundle
  cd client
  yarn
  cd ..
```

The package dependencies will be intalled at this point.

Note that the application won't run yet because we first need to set up the database


## Instructions to create and initialize the database (if required)
In order to create and populate the database, we need to create a `config/secrets.yml` file inside our application directory.

I've left an example file on the repository, so we start by copying it to it destination

```
  cp config/secrets.example.yml config/secrets.yml
```

Then we fill out the user and password for our MySQL database user.

We also need to set an email and password for the first admin user of the system.

We might end up with a file like this one:

```yml
  development:
    secret_key_base: 9bf75221023397316e0ba90f36d463ffa0ef08aa185dba4d69de679f66df9d451aa8387dabe4756fed4551dbb081a27d6a3bf8dfd03b6bd8ba7cd5647106c8dc
    db_user:     myself
    db_password: 123456789
    admin_mail:  "admin@example.com"
    admin_pass:  "123456"
  test:
    secret_key_base: 13125c4ac42f46b67e4d9f3e3c59521fcd1d0b9ad1251cc10e01da3a928d105df54bd7a90cf10813f8e45995e3855e058db98787be2537630381eca5e287e1d1
    db_user:     myself
    db_password: 123456789
  
  production:
    secret_key_base: <%= ENV["SECRET_KEY_BASE"] %>
```

Then we can create, migrate and seed the database

```
rails db:create
rails db:migrate
rails db:seed
```

Note that seeding the database is important. This step will create the default roles for the system and the admin user.

# Assumptions you have made - it is good to explain your thought process and the assumptions you have made

* Accounts can have multiple roles on the system. Given that I didn't know what poduct the system was aimed to, I assumed that a user could belong to customer service and also own a copy of said product. For that reason, accounts can be both agents and customers.
* More than one admin. Even though the first user created (by the seeds) is an admin, he/sh can assign and revoke this role to other users on the system.
* There must be at least one admin. If the system looses all it's admin accounts, nooce will be able to manage it. For this reason, the first admin assigned will be an admin forever.

# Requirements that you have not covered in your submission, if any
* Front end testing
* Deployment process

# Issues you have faced while completing the assignment, if any
As stated on the extension request, I didn't have any experience building SPAs. For that reason, I spent the first 6 and a half days learning `React.js`.

For this reason, I didn't have the time to finish everything. It took me way more time to  develop the front-end, leaving me no time to fine tune the application, which let to a non-optimal design of the application as a whole.

I don't think this app is up to great standards, but I'm submitting it either way because it took great efford to produce and it is full featured.

But as said, there are a lot of fine tune details that are not included in the final design.
