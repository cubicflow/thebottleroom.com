---
title: Eats
layout: menu
sidebar_order: 1
is_public: true
is_alcohol: false
subcategories:
  - name: Small Bites
    items:
      - name: Hummus
        description: Parsley pesto, French feta, pita and extra virgin olive oil
        price: 6.00
        image_path:
        stackable: true
        orderable: true
      - name: Crispy Fried Calamari
        description: Szechuan dipping sauce and lemon
        price: 8.00
        image_path:
        stackable: true
        orderable: true
      - name: Jidori Chicken "Lollipops"
        description: Fried drumsticks with spicy sriracha honey glaze
        price: 6.00
        image_path:
        stackable: true
        orderable: true
      - name: Mini Bottle Room Burgers (2)
        description: Sweet onion relish, blue and swiss cheeses
        price: 7.00
        image_path:
        stackable: true
        orderable: true
      - name: Chef's Cheese Plate
        description: Weekly selection of cheeses with toast and apricot jam
        price: 13.00
        image_path:
        stackable: true
        orderable: true
        custom_fields:
          - name: With Charcuterie +$4
            options: "No|Yes[+4.00]"
            required: false
      - name: Mac n Cheese
        description: Grafton aged cheddar and bacon-fat bread crumbs
        price: 7.00
        image_path:
        stackable: true
        orderable: true
      - name: Tony Tots
        description: Homemade potato tots with chipotle aioli
        price: 5.00
        image_path:
        stackable: true
        orderable: true
      - name: Sweet Potato Fries
        description: Tossed in fried ginger salt
        price: 5.00
        image_path:
        stackable: true
        orderable: true
      - name: Shoestring Potatoes
        description: Skinny fries tossed in sea salt and raw garlic
        price: 5.00
        image_path:
        stackable: true
        orderable: true
  - name: Small Bites
    items:
      - name: Grilled Asparagus
        description: Serrano ham, sherry honey, marcona almonds
        price: 7.00
        image_path:
        stackable: true
        orderable: true
      - name: English Pea "Guacamole"
        description: With queso fresco on grilled giabatta
        price: 6.00
        image_path:
        stackable: true
        orderable: true
      - name: Spaghetti Carbonara
        description: Creamy parmesan sauce with bacon and 63-Degree Egg
        price: 9.00
        image_path:
        stackable: true
        orderable: true
      - name: Quesadilla de Chorizo
        description: Mexican pork chorizo with oaxacan cheese and rajas
        price: 6.00
        image_path:
        stackable: true
        orderable: true
      - name: Shrimp Tostada
        description: White bean spread, chipotle crema, and avocado
        price: 8.00
        image_path:
        stackable: true
        orderable: true
      - name: Pan Seared Salmon Tacos (2)
        description: Pico de gallo, chipotle crema, and avocado
        price: 9.00
        image_path:
        stackable: true
        orderable: true
      - name: Pork Belly Bao
        description: Sweet & Spicy BBQ and pickled daikon slaw
        price: 6.00
        image_path:
        stackable: true
        orderable: true
      - name: Lamb Barbacoa Tacos
        description: Slow braised lamb shoulder, guajillo salsa, and pickled onions
        price: 7.00
        image_path:
        stackable: true
        orderable: true
  - name: Salads
    items:
      - name: Wild Argula Salad
        description: French feta, pickled onions, hazelnuts and white balsamic
        price: 7.00
        image_path:
        stackable: true
        orderable: true
      - name: Roasted Beet Salad
        description: Goat cheese, blood oranges, and pistachios
        price: 8.00
        image_path:
        stackable: true
        orderable: true
      - name: Caesar Salad
        description: Romaine hearts, caesar dressing, fried croutons
        price: 8.00
        image_path:
        stackable: true
        orderable: true
  - name: Flatbreads
    items:
      - name: Mediterranean Artichokes
        description: With kalamata olives, sundried tomatoes and feta cheeses
        price: 11.00
        image_path:
        stackable: true
        orderable: true
      - name: Fingerling Potato and Spinach
        description: Roasted garlic, ricotta cheese, and chili flakes
        price: 11.00
        image_path:
        stackable: true
        orderable: true
        custom_fields:
          - name: Add bacon +$2
            options: "No|Yes[+2.00]"
            required: false
      - name: Spanish Chorizo
        description: Piquillo peppers, goat cheese, and scallions
        price: 12.00
        image_path:
        stackable: true
        orderable: true
  - name: Burgers
    items:
      - name: The Bottle Room Original
        description: Sweet onion relish and arugula with blue and swiss cheeses. With side argula salad
        price: 12.00
        image_path:
        stackable: true
        orderable: true
        custom_fields:
          - name: Meat cooked to
            options: "Rare|Medium-rare|Medium|Medium-well|Well"
            required: true
          - name: Add bacon +$2
            options: "No|Yes[+2.00]"
            required: false
          - name: Add fried egg +$1
            options: "No|Yes[+1.00]"
            required: false
          - name: Add avocado +$1
            options: "No|Yes[+1.00]"
            required: false
          - name: Add pickles +$1
            options: "No|Yes[+1.00]"
            required: false
          - name: Substitute Mushrooms for non-meat eaters (no charge)
            options: "No|Yes"
            required: false
          - name: Substitute Salad for Fries +$2
            options: "No|Yes, Shoestring Fries[+2.00]|Yes, Sweet potato fries[+2.00]"
            required: false
      - name: Uptown Bacon Cheese Burger
        description: Bacon marmalade, swiss cheese, homemade onion ring and BBQ. With side argula salad
        price: 13.00
        image_path:
        stackable: true
        orderable: true
        custom_fields:
          - name: Meat cooked to
            options: "Rare|Medium-rare|Medium|Medium-well|Well"
            required: true
          - name: Add bacon +$2
            options: "No|Yes[+2.00]"
            required: false
          - name: Add fried egg +$1
            options: "No|Yes[+1.00]"
            required: false
          - name: Add avocado +$1
            options: "No|Yes[+1.00]"
            required: false
          - name: Add pickles +$1
            options: "No|Yes[+1.00]"
            required: false
          - name: Substitute Mushrooms for non-meat eaters (no charge)
            options: "No|Yes"
            required: false
          - name: Substitute Salad for Fries +$2
            options: "No|Yes, Shoestring Fries[+2.00]|Yes, Sweet potato fries[+2.00]"
            required: false
      - name: American Dream
        description: Crispy pickles, House-Made American Cheese and Russian Dressing. With side argula salad
        price: 12.00
        image_path:
        stackable: true
        orderable: true
        custom_fields:
          - name: Meat cooked to
            options: "Rare|Medium-rare|Medium|Medium-well|Well"
            required: true
          - name: Add bacon +$2
            options: "No|Yes[+2.00]"
            required: false
          - name: Add fried egg +$1
            options: "No|Yes[+1.00]"
            required: false
          - name: Add avocado +$1
            options: "No|Yes[+1.00]"
            required: false
          - name: Add pickles +$1
            options: "No|Yes[+1.00]"
            required: false
          - name: Substitute Mushrooms for non-meat eaters (no charge)
            options: "No|Yes"
            required: false
          - name: Substitute Salad for Fries +$2
            options: "No|Yes, Shoestring Fries[+2.00]|Yes, Sweet potato fries[+2.00]"
            required: false
      - name: The Bacon & Egg
        description: 75/25 beef and bacon patty. Thick-cut bacon, fried egg, House-Made American Cheese and Buttermilk Aioli. With side argula salad
        price: 12.00
        image_path:
        stackable: true
        orderable: true
        custom_fields:
          - name: Meat cooked to
            options: "Medium|Medium-well|Well"
            required: true
          - name: Add bacon +$2
            options: "No|Yes[+2.00]"
            required: false
          - name: Add fried egg +$1
            options: "No|Yes[+1.00]"
            required: false
          - name: Add avocado +$1
            options: "No|Yes[+1.00]"
            required: false
          - name: Add pickles +$1
            options: "No|Yes[+1.00]"
            required: false
          - name: Substitute Mushrooms for non-meat eaters (no charge)
            options: "No|Yes"
            required: false
          - name: Substitute Salad for Fries +$2
            options: "No|Yes, Shoestring Fries[+2.00]|Yes, Sweet potato fries[+2.00]"
            required: false
      - name: Avocado Turkey Burger
        description: Dark and white turkey blend. North Country bacon, mushrooms, swiss cheese, and garlic aioli. With side argula salad
        price: 12.00
        image_path:
        stackable: true
        orderable: true
        custom_fields:
          - name: Add bacon +$2
            options: "No|Yes[+2.00]"
            required: false
          - name: Add fried egg +$1
            options: "No|Yes[+1.00]"
            required: false
          - name: Add avocado +$1
            options: "No|Yes[+1.00]"
            required: false
          - name: Add pickles +$1
            options: "No|Yes[+1.00]"
            required: false
          - name: Substitute Mushrooms for non-meat eaters (no charge)
            options: "No|Yes"
            required: false
          - name: Substitute Salad for Fries +$2
            options: "No|Yes, Shoestring Fries[+2.00]|Yes, Sweet potato fries[+2.00]"
            required: false
  - name: Sweets
    items:
      - name: Warm brioche bread pudding
        description: With vanilla bean gelato, salted caramel and candied hazelnuts
        price: 5.00
        image_path:
        stackable: true
        orderable: true
      - name: English Pea "Guacamole"
        description: Root Cellars Row Hard Root Beer with vanilla gelato
        price: 7.00
        image_path:
        stackable: true
        orderable: true
---
