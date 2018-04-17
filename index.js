Vue.component('message', {
    props: ['title', 'body'],

    template: `
        <article class="message" v-show="isVisible">
        <div class="message-header">
            <p>{{ title }}</p>
            <button class="delete" aria-label="delete" @click="hideModal"></button>
        </div>
        <div class="message-body">{{ body }}</div>
    </article>
    `,

    data() {
        return {
            isVisible: true
        }
    },

    methods: {
        hideModal() {
            this.isVisible = false;
        }
    }
});

Vue.component('modal', {
    template: `
        <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <slot></slot>
            </div>
        </div>
        <button class="modal-close is-large"
         aria-label="close"
         @click="$emit('close')"></button>
    </div>
    `,

});

Vue.component('tabs', {
    template: `
        <div>
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                        <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                    </li>
                </ul>
            </div>
            
            <div class="tabs-details">
                <slot></slot>
            </div>
        </div>
    `,

    data() {
        return { tabs: [] };
    },

    created() {
        this.tabs = this.$children;
    },

    methods: {
        selectTab(selectedTab) {
            // console.log(tab.name);
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name === selectedTab.name);
            })
        }
    }
});

Vue.component('tab', {
    template: `
        <div v-show="isActive"><slot></slot></div>
    `,

    props: {
        name: { required: true },
        selected: { default: false }
    },

    data() {
        return {
            isActive: false
        }
    },

    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },

    mounted() {
        this.isActive = this.selected;
    }
});

Vue.component('coupon', {
    template: `<input placeholder="you code here..." @blur="onCouponApplied">`,

    methods: {
        onCouponApplied() {
            let data = {'code' : '987643467'};

            this.$emit('coupon-was-applied', event);
        }
    }
});

new Vue({
    el: '#root',

    data: {
        showModal: false
    },

    methods: {
        onCouponApplied($event) {
            console.log($event);
            alert('It was applied');
        }
    }
});