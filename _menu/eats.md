---
title: Eats
layout: menu
sidebar_order: 1
is_public: true
is_alcohol: false
is_brunch: false
subcategories:
  - name: Bar Bites
    items:
      - name: Hummus
        description: Parsley Pesto, French Feta, Pita and Extra Virgin Olive Oil
        price: 6.00
        image_path:
        stackable: true
        orderable: true
      - name: Crispy Fried Calamari
        description: Szechuan Dipping Sauce and Lemon
        price: 8.00
        image_path:
        stackable: true
        orderable: true
      - name: Jidori Chicken "Lollipops"
        description: Fried Drumsticks with Spicy Sriracha Honey Glaze
        price: 6.00
        image_path:
        stackable: true
        orderable: true
      - name: Mini Bottle Room Burgers (2)
        description: Sweet Onion Relish, Blue and Swiss Cheeses
        price: 7.00
        image_path:
        stackable: true
        orderable: true
      - name: Chef's Cheese Plate
        description: Weekly selection of Cheeses with Toast and Apricot Jam
        price: 13.00
        image_path:
        stackable: false
        orderable: true
        custom_fields:
          - name: With Charcuterie +$4
            options: "No|Yes[+4.00]"
            required: false
      - name: Mac n Cheese
        description: Grafton Aged Cheddar and Bacon-Fat Bread Crumbs
        price: 7.00
        image_path:
        stackable: true
        orderable: true
      - name: Tony Tots
        description: Homemade Potato Tots with Chipotle Aïoli
        price: 5.00
        image_path:
        stackable: true
        orderable: true
      - name: Sweet Potato Fries
        description: Tossed in Fried Ginger Salt
        price: 5.00
        image_path:
        stackable: true
        orderable: true
      - name: Shoestring Potatoes
        description: Skinny Fries tossed in Sea Salt and Raw Garlic
        price: 5.00
        image_path:
        stackable: true
        orderable: true
  - name: Seasonal Small Bites
    items:
      - name: Grilled Corn on the Cob "Elote"
        description: Mayo, Queso Cotija, Lime, and Smoked Chili Powder
        price: 4.00
        image_path:
        stackable: true
        orderable: true
      - name: Watermelon Salad
        description: Feta Cheese, Yuzu Vinaigrette, Cucumber, Red Onioj
        price: 8.00
        image_path:
        stackable: true
        orderable: true
      - name: Heirloom Tomato & Avocado "Toast"
        description: Marinated Baby Heirloom Tomatoes, Avocado Chunks, Cilantro
        price: 8.00
        image_path:
        stackable: true
        orderable: true
      - name: Shrimp Tostada
        description: Marinated Shrimp, Napa Cabbage, Szechuan Vinaigrette, Cilantro, Peanuts
        price: 11.00
        image_path:
        stackable: true
        orderable: true
      - name: Pork Belly Tacos (2)
        description: Crispy Pork Belly with Pineapple Habanero Salsa
        price: 10.00
        image_path:
        stackable: true
        orderable: true
      - name: Baby Back Ribs
        description: Spicy BBQ, American Potato Salad, and 1/2 Grilled Corn
        price: 13.00
        image_path:
        stackable: true
        orderable: true
      - name: Prime Flat Iron Steak (8oz)
        description: Maitre d’Hôtel Butter, Garlic Fries and Aïoli
        price: 15.00
        image_path:
        stackable: true
        orderable: true
  - name: Fresh Salads
    items:
      - name: House Greens
        description: Blue Cheese Crumbles, Apricots, Almonds and Sherry Vinaigrette
        price: 7.00
        image_path:
        stackable: true
        orderable: true
      - name: Wild Arugula Salad
        description: French Feta, Pickled Onions, Hazelnuts and White Balsamic
        price: 7.00
        image_path:
        stackable: true
        orderable: true
      - name: Caesar Salad
        description: Romaine Hearts, Caesar Dressing, Fried Brioche Croutons
        price: 8.00
        image_path:
        stackable: true
        orderable: true
  - name: Flatbreads
    items:
      - name: Summer Margarita
        description: Baby Heirlooms, Sun Dried Tomatoes, San Marzano Sauce, Basil
        price: 11.00
        image_path:
        stackable: false
        orderable: true
        orderable: true
        custom_fields:
          - name: Add bacon +$2
            options: "No|Yes[+2.00]"
            required: true
      - name: Squash Blossoms
        description: Goat Cheese, Baby Zucchino, Aleppo Chilies
        price: 12.00
        image_path:
        stackable: true
        orderable: true
      - name: Spanish Chorizo (Pamplona)
        description: Piquillo Peppers, Goat Cheese, and Scallions
        price: 12.00
        image_path:
        stackable: true
        orderable: true
  - name: Burgers
    items:
      - name: The Bottle Room Original (7oz)
        description: Sweet Onion Relish and Arugula with Blue and Swiss Cheeses. With side arugula salad
        price: 12.00
        image_path:
        stackable: false
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
          - name: Add tomato +$1
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
      - name: Uptown Bacon Cheese Burger (7oz)
        description: Bacon Marmalade, Swiss Cheese, Homemade Onion Ring and BBQ. With side arugula salad
        price: 12.00
        image_path:
        stackable: false
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
          - name: Add tomato +$1
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
      - name: Black & Bleu (7oz)
        description: Black Fig Jam, St. Agur Bleu and Duck Fat Onions. With side arugula salad
        price: 12.00
        image_path:
        stackable: false
        orderable: true
        custom_fields:
          - name: Meat cooked to
            options: "Rare|Medium-rare|Medium|Medium-well|Well"
            required: true
          - name: The Black & Bleu DELUXE +$3
            options: "No|Yes[+3.00]"
            required: false
          - name: Substitute Mushrooms for non-meat eaters (no charge)
            options: "No|Yes"
            required: false
          - name: Substitute Salad for Fries +$2
            options: "No|Yes, Shoestring Fries[+2.00]|Yes, Sweet potato fries[+2.00]"
            required: false
      - name: Spicy Crispy Chicken Sandwich
        description: Buttermilk Tabasco Marinated, Chipotle Aïoli, Pickles, and Slaw
        price: 12.00
        image_path:
        stackable: false
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
          - name: Substitute Salad for Fries +$2
            options: "No|Yes, Shoestring Fries[+2.00]|Yes, Sweet potato fries[+2.00]"
            required: false
      - name: Avocado Turkey Burger (7oz)
        description: Dark and White Turkey Blend. North Country Bacon, Mushrooms, Swiss Cheese and Garlic Aïoli. With side arugula salad
        price: 12.00
        image_path:
        stackable: false
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
          - name: Add tomato +$1
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
        description: With Vanilla Bean Gelato, Salted Caramel and Candied Hazelnuts
        price: 5.00
        image_path:
        stackable: true
        orderable: true
      - name: Hard Root Beer Float
        description: Root Cellars Row Hard Root Beer with Vanilla Gelato
        price: 7.00
        image_path:
        stackable: true
        orderable: true
---
