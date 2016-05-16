# The Bottle Room

Website for the bottleroombar.com using Jekyll, Foundation 6, and Snipcart.

## Editing

This site is maintained using [CloudCannon](www.cloudcannon.com)

# Pages

### Home
The majority of this page should be editable via the visual editor. The existing settings/front-matter for this page should not be changed.

### Menu
The menu pages are generated via the menu collection and described in more depth later in this readme.

### Events
Events are managed through the pages settings/front-matter. Events should contain a `Date`, `Description`, `URL`, and `Upcoming`.

The page also contains a 'In the Press' section which should be edited via the visual editor.

### Gallery
The gallery images are managed in the settings/front-matter. Each Image should have a `Title` and `Image_path`.

**Be careful when adding or changing an image path, make sure that all the relevant image versions/sizes are present in the same directory and are named correctly**

### Location
This page has no elements that can be edited through the visual editor. This page relies heavily on the settings.yml and hours-display.yml data files. See more about data files below.

### Chef Tony
All editable elements on this page should be accessible via the visual editor.

# Menu

The menu collection houses all menu data and can be updated via CC. The menu collection should have a new file for each menu category, and have the subcategories defined in that file.

# Data

The data folder houses setting that are used in multiple places throughout the website.

#### Settings.yml

`online_ordering_enabled` When turned off all ordering related functionality is hidden. No 'Add To Cart' buttons will appear on the site, and the site will make no mention of online ordering.

`send_contact_to` All contact attempts made from forms on the site will be sent to this email address.

`Social Media Information` & `Location Information` are also managed through this file and are used sitewide.

#### featured-items.yml

The featured-items data files controls which menu items appear under the "SOME OF OUR POPULAR MENU ITEMS" heading in the footer. Each item to list should have a 'name' and 'item_url' which contains a permalink to the relevant menu item.

```
featured_items:
  - name: Spanish Chorizo
    item_url: /menu/eats/#spanish-chorizo
```

#### hours-display.yml

This file contains the schedule for display on the website. This appears both on the 'location' page and the hours popup on the homepage. The data is organized in 'TimePeriods', each TimePeriod should contain the fields 'label', 'normalService', and 'breakfast'

```
timePeriods:
  - label: Sunday
    normalService: 12pm - 10pm (Happy Hour ALL DAY)
    breakfast: 8am - 11:30am
```

If the 'breakfast' field is blank, breakfast will not be mentioned for that timePeriod.

### hours-internal.json

This file contains the restaurant schedule to be read via javascript and utilized in the internal ordering system. The file is arranged by days of the week, and each day of the week should include the following fields:

```
"tuesday": {
  "open": "01:00",
  "close": "22:47",
  "restaurantClose": "33:00",
  "breakfast": {}
},
```

The 'breakfast' field is optional and not utilized by our system at this time.

**Please notify cubicflow when changes to this file are made. Changes to this file may take longer to take effect then others due to the JavaScript needing to be recompiled**


# Development / Deployment

Development: run `npm start` in development to automatically build files, watch for any changes, and run a dev server.

Deployment: Run `npm run build` before any commits that will be deployed **IMPORTANT**


## Boilerplate

This website is based off of the lovely [jekyll-foundation](jekyll-foundation) Boilerplate.

See their documentation for more in depth instructions on getting a development environment setup.
[Jekyll + Foundation 6 Boilerplate docs](https://github.com/core77/jekyll-foundation)
