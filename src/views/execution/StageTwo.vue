<template>
  <div class="fixed inset-0 flex items-center justify-center bg-white min-h-screen ">
    <div class="bg-[#30333C] text-white rounded-xl w-full max-w-3xl shadow-2xl px-[50px]">
      <!-- Header -->
      <div class="flex items-center gap-3  pt-6">
        <div
          class="bg-[#36e3c1]  w-10 h-10 flex items-center justify-center font-bold text-[#222933] text-2xl flex-shrink-0 overflow-hidden">
          <img src="/logo.png" alt="Logo" class="w-full h-full object-cover" />
        </div>
        <div class="flex-1 min-w-0">
          <div class="font-bold text-lg leading-tight">AVA'S WEEKLY REPORT</div>
          <div class="text-[#36e3c1] text-sm leading-tight">Let's take a moment to consider how your week went.</div>
        </div>

      </div>

      <div class="py-5">
        <transition name="fade" mode="out-in">
          <component :is="currentComponent" :key="currentStep" />
        </transition>
      </div>

      <!-- Footer: controls -->
      <div class="px-6 pb-6 flex flex-col sm:flex-row items-center justify-center gap-3 mb-4 mt-4">
        <button @click="prev"
          class="w-full sm:w-[130px] bg-[#327D8B] text-[#fff] rounded-full px-6 py-2 font-semibold hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#36e3c1] focus:ring-opacity-50">PREVIOUS</button>
        <button @click="next"
          class="w-full sm:w-[130px] bg-[#36e3c1] text-[#222933] rounded-full px-3 py-2 font-semibold hover:bg-[#25bb9d] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#36e3c1] focus:ring-opacity-50">{{
            currentStep === steps.length - 1 ? 'FULL REPORT' : 'NEXT' }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import StepOne from './stage2/StepOne.vue'
import StepTwo from './stage2/StepTwo.vue'
import StepThree from './stage2/StepThree.vue'

const router = useRouter()

const steps = [StepOne, StepTwo, StepThree]
const currentStep = ref(0)

const currentComponent = computed(() => steps[currentStep.value])
const progress = computed(() => `${((currentStep.value + 1) / steps.length) * 100}%`)

function next() {
  if (currentStep.value < steps.length - 1) {
    currentStep.value += 1
  } else {
    router.push({ name: 'stage-two-step-four' })
  }
}
function prev() {
  if (currentStep.value === 0) {
    router.push({ name: 'home' })
  } else {
    currentStep.value -= 1
  }
}

function handleKey(e) {
  if (e.key === 'ArrowRight' || e.key === 'Enter') next()
  if (e.key === 'ArrowLeft') prev()
}

onMounted(() => window.addEventListener('keydown', handleKey))
onBeforeUnmount(() => window.removeEventListener('keydown', handleKey))
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s ease
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0
}
</style>
