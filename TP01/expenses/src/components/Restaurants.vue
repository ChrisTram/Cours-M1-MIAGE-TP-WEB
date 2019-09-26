<template>
    <div>
        <div v-if="restaurants.length">
            <ol>
                <li v-for="(restaurant, index) in restaurants" :key="index">
                    {{restaurant.name}} - {{restaurant.amount}} <button @click="removerestaurant(restaurant)">Remove</button>
                </li>
            </ol>
            <p>Total: {{total}}</p>
        </div>

        <div v-else>
            <p>Hooray! You didn't spend anything.</p>
        </div>

        <hr>
        <p>New restaurant:</p>
        <form v-on:submit.prevent>
            <div>
                <input type="text" v-model="name" placeholder="What did you buy?">
            </div>
            <div>
                <input type="text" v-model="amount" placeholder="How much is it?">
            </div>
            <div>
                <button @click="addrestaurant()">Submit</button>
            </div>
        </form>
    </div> 
</template>

<script>
import {db} from '../main.js'
import _ from 'lodash'
export default {
    name: 'HelloWorld',
    data: () => ({
        name: '',
        amount: '',
        total: 0,
        restaurants: []
    }),
    firestore() {
        return {
            restaurants: db.collection('restaurant')
        }
    },
    methods: {
        addrestaurant() {
            this.$firestore.restaurants.add({
                name: this.name,
                amount: this.amount,
                dateCreated: new Date()
            })
            this.name = ''
            this.amount = ''
        },
        removerestaurant(restaurant){
            this.$firestore.restaurants.doc(restaurant['.key']).delete();
        }
    },
    watch: {
        restaurants() {
            this.total = _.sumBy(this.restaurants, function(restaurant) { return parseFloat(restaurant.amount); });
        }
    }
}
</script>

<style scoped>
    div {
        margin-bottom: 20px;
    }
</style>