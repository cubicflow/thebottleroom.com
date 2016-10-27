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
        description: Fried drumsticks with spicy Sriracha honey glaze
        price: 6.00
        image_path:
        stackable: true
        orderable: true
      - name: Mini Bottle Room Burgers (2)
        description: Sweet onion relish, blue and Swiss cheeses
        price: 7.00
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
        description: Homemade potato tots with chipotle aïoli
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
      - name: Roasted Pumpkin and Burata
        description: Brown butter-brown sugar drizzle, pumpkin seeds
        price: 6.00
        image_path:
        stackable: true
        orderable: true
      - name: Pink Lady Apple Salad
        description: Arugula, feta, raisins, hazelnuts, and pickled onions
        price: 8.00
        image_path:
        stackable: true
        orderable: true
      - name: Mama's Gnocchi
        description: Yukon gold potato dumplings with Nduja (en-doo-ya) Sauce and mushrooms
        price: 7.00
        image_path:
        stackable: true
        orderable: true
      - name: BBQ Shrimp "Martini"
        description: Sweet and spicy shrimp, horseradish coleslaw and crushed almonds
        price: 9.00
        image_path:
        stackable: true
        orderable: true
      - name: Grilled Octopus Tacos (2)
        description: Marinated in chimichurri and served with Mexican chorizo salsa
        price: 10.00
        image_path:
        stackable: true
        orderable: true
      - name: House Cured Pork Belly (Berkshire)
        description: Butternut squash, caramelized blueberries
        price: 9.00
        image_path:
        stackable: true
        orderable: true
      - name: Dug Leg Confit (Hudson Valley)
        description: Braised red cabbage and sweet potato dumplings
        price: 9.00
        image_path:
        stackable: true
        orderable: true
      - name: Ribeye Pub Steak (6 oz.)
        description: Maitred'Hôtel Butter, garlic fries and aïoli
        price: 14.00
        image_path:
        stackable: true
        orderable: true
  - name: Fresh Salads
    items:
      - name: House Greens
        description: Blue cheese crumbles, apricots, almonds and sherry-vinaigrette
        price: 7.00
        image_path:
        stackable: true
        orderable: true
      - name: Wild Arugula Salad
        description: French Feta, pickled onions, hazelnuts and white balsamic
        price: 7.00
        image_path:
        stackable: true
        orderable: true
      - name: Caesar Salad
        description: Romaine hearts, Caesar Dressing, fried brioche croutons
        price: 8.00
        image_path:
        stackable: true
        orderable: true
  - name: Flatbreads
    items:
      - name: Japanese Pumpkin
        description: Sautéed black kale, feta crumbles, and fresh arugula
        price: 11.00
        image_path:
        stackable: false
        orderable: true
        custom_fields:
          - name: Add bacon +$2
            options: "No|Yes[+2.00]"
            required: false
      - name: Mushroom
        description: Cremini and shiitake mushrooms, shallot confit and white truffle oil
        price: 12.00
        image_path:
        stackable: true
        orderable: true
      - name: Spanish Chorizo (Pamplona)
        description: Piquillo peppers, goat cheese, and scallions
        price: 12.00
        image_path:
        stackable: true
        orderable: true
  - name: Burgers
    items:
      - name: The Bottle Room Original
        description: Sweet onion relish and arugula with blue and Swiss cheeses. With side arugula salad
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
        description: Bacon marmalade, Swiss Cheese, homemade onion ring and BBQ. With side arugula salad
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
      - name: Black & Bleu
        description: Black fig jam, St. Agur Bleu and duck fat onions. With side arugula salad
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
        description: Cheddar, lettuce, House Pickles, tomato and Secret Sauce. With side arugula salad
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
        description: Dark and white turkey blend. North Country Bacon, mushrooms, Swiss Cheese, and garlic aïoli. With side arugula salad
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
