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
      - name: Chef's Cheese Plate
        description: Weekly selection of cheeses with toast and apricot jam
        price: 13.00
        image_path:
        stackable: false
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
  - name: Seasonal Small Bites
    items:
      - name: Corn on the Cob
        description: Mexican crema, cotija and chili powder
        price: 4.00
        image_path:
        stackable: true
        orderable: true
      - name: Baby Heirloom Tomato Toast
        description: Basil & garlic marinated with goat cheese on grilled ciabatta
        price: 6.00
        image_path:
        stackable: true
        orderable: true
      - name: Watermelon Salad
        description: Baby kale with farro, feta, raisins and pickled onions
        price: 7.00
        image_path:
        stackable: true
        orderable: true
      - name: Stuffed Squash Blossoms
        description: With zucchini, ricotta cheese and red pepper coulis
        price: 7.00
        image_path:
        stackable: true
        orderable: true
      - name: BBQ Shrimp “Cocktail”
        description: Sweet and spicy shrimp over horseradish scented coleslaw
        price: 9.00
        image_path:
        stackable: true
        orderable: true
      - name: Pork Belly Tacos
        description: (2) Slow braised pork belly with peach and habanero salsa
        price: 8.00
        image_path:
        stackable: true
        orderable: true
      - name: Grilled Pheasant Sausage
        description: Bacon baked lentils and duck-fat onions
        price: 8.00
        image_path:
        stackable: true
        orderable: true
      - name: Baby Back Ribs
        description: Miso BBQ glaze and american potato salad
        price: 9.00
        image_path:
        stackable: true
        orderable: true
  - name: Fresh Salads
    items:
      - name: House Greens
        description: Blue cheese crumbles, dried apricots, almonds and sherry-honey
        price: 7.00
        image_path:
        stackable: true
        orderable: true
      - name: Wild Arugula Salad
        description: French feta, pickled onions, hazelnuts and white balsamic
        price: 7.00
        image_path:
        stackable: true
        orderable: true
      - name: Caesar Salad
        description: Romaine hearts, caesar dressing, fried brioche croutons
        price: 8.00
        image_path:
        stackable: true
        orderable: true
  - name: Flatbreads
    items:
      - name: Summer Margarita
        description: Fresh and sun dried tomatoes, basil and crispy garlic
        price: 11.00
        image_path:
        stackable: false
        orderable: true
        custom_fields:
          - name: Add bacon +$2
            options: "No|Yes[+2.00]"
            required: false
      - name: Kernel Swine
        description: North country bacon, roasted corn, caramelized onions and ricotta
        price: 11.00
        image_path:
        stackable: false
        orderable: true
        custom_fields:
          - name: Vegetarian option (no charge)
            options: "No|Yes"
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
        description: Sweet onion relish and arugula with blue and swiss cheeses. With side arugula salad
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
      - name: Uptown Bacon Cheese Burger
        description: Bacon marmalade, swiss cheese, homemade onion ring and BBQ. With side arugula salad
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
      - name: American Dream
        description: Crispy pickles, House-Made American Cheese and Russian Dressing. With side arugula salad
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
      - name: California Classic
        description: Cheddar, lettuce, House Pickles, tomato and thousand island. With side arugula salad
        price: 12.00
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
      - name: Avocado Turkey Burger
        description: Dark and white turkey blend. North Country Bacon, mushrooms, swiss cheese, and garlic aioli. With side arugula salad
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
        description: With vanilla bean gelato, salted caramel and candied hazelnuts
        price: 5.00
        image_path:
        stackable: true
        orderable: true
      - name: Hard Root Beer Float
        description: Root Cellars Row Hard Root Beer with vanilla gelato
        price: 7.00
        image_path:
        stackable: true
        orderable: true
---
