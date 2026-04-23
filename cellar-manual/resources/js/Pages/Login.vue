<template>
    <div class="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        
        <div class="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border-t-4 border-indigo-600">
            <div class="text-center mb-8">
                <h1 class="text-3xl font-extrabold text-slate-800 tracking-tight">Cellar Manual</h1>
                <p class="text-slate-500 mt-2">Enter credentials to unlock the inventory</p>
            </div>

            <form @submit.prevent="submit" class="space-y-6">
                <div>
                    <label class="block text-sm font-semibold text-slate-700 mb-1">Director Email</label>
                    <input v-model="form.email" type="email" placeholder="admin@cellar.com" 
                           class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all">
                </div>

                <div>
                    <label class="block text-sm font-semibold text-slate-700 mb-1">Security Key</label>
                    <input v-model="form.password" type="password" placeholder="••••••••"
                           class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all">
                </div>

                <button type="submit" 
                        class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg shadow-lg transform active:scale-[0.98] transition-all">
                    Unlock System
                </button>
            </form>

            <div class="mt-8 pt-6 border-t border-slate-100 text-center">
                <p class="text-xs text-slate-400 uppercase tracking-widest font-semibold">Security Protocol v1.0</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import { router } from '@inertiajs/vue3'

const form = reactive({
  email: '',
  password: '',
})

function submit() {
  // This is the Functionality Foundation: 
  // Sending data from the UI to the Laravel Brain
  router.post('/login', form)
}
</script>