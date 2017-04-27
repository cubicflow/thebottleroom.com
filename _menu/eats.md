---
title: Eats
layout: menu
sidebar_order: 1
is_public: true
is_alcohol: false
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
      - name: Strawberry & Cucumber Salad
        description: House Cut Greens, Feta Cheese,Champagne Vinaigrette and Hazelnuts
        price: 7.00
        image_path:
        stackable: true
        orderable: true
      - name: Marinated Red Beets
        description: Bermuda Triangle Goat, Sweet Grapefruit, and Pistachios
        price: 7.00
        image_path:
        stackable: true
        orderable: true
      - name: Peas & Love
        description: Bacon Glazed English Peas and Ricotta on Ciabatta
        price: 7.00
        image_path:
        stackable: true
        orderable: true
      - name: Grilled Asparagus
        description: Burrata Mozzarella, Crispy Prosciutto and Aged Balsamic
        price: 9.00
        image_path:
        stackable: true
        orderable: true
      - name: Baja Style Tacos (2)
        description: Crispy Tempura Halibut, Curry Spiced Salsa and Marinated Cabbage
        price: 10.00
        image_path:
        stackable: true
        orderable: true
      - name: Merguez Lamb Sausage
        description: Harissa Peppers, Beluga Lentil “Dal”, and Spicy Yogurt Sauce
        price: 9.00
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
      - name: Spring Garlic and Asparagus
        description: With English Peas and Ricotta Cheese
        price: 11.00
        image_path:
        stackable: false
        orderable: true
        orderable: true
        custom_fields:
          - name: Add bacon +$2
            options: "No|Yes[+2.00]"
            required: true
      - name: Three Little Pigs
        description: Bacon, Chorizo, Pepperoni
        price: 14.00
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
      - name: Lamburguesa (6oz)
        description: Fried Jalapenos, Smoked Chili Cheddar, Guajillo Ketchup
        price: 14.00
        image_path:
        stackable: false
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
