<template>
    <div class="fixed inset-0 flex items-center justify-center bg-white min-h-screen p-3 sm:p-4">
        <div
            class="bg-[#30333C] text-white rounded-xl px-4 sm:px-6 md:px-[50px] py-4 sm:py-6 md:py-[30px] shadow-2xl flex flex-col items-center w-full max-w-3xl">
            <div class="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 w-full">
                <div
                    class="bg-[#36e3c1] w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center font-bold text-[#222933] text-xl sm:text-2xl flex-shrink-0 overflow-hidden">
                    <img src="/logo.png" alt="Logo" class="w-full h-full object-cover" />
                </div>

                <div class="flex-1 min-w-0">
                    <div class="font-bold text-base sm:text-lg leading-tight">AVA'S WEEKLY REPORT</div>
                    <div class="text-[#36e3c1] text-xs sm:text-sm leading-tight">Let's take a moment to consider how
                        your week
                        went.</div>
                </div>
            </div>

            <div class="w-full text-left">
                <div class="font-semibold text-sm sm:text-base mb-1">EXECUTION RATE</div>
                <div class="text-xs text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                    You executed at a better rate than the previous week. Well done!
                </div>

                <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6">
                    <div class="flex flex-row items-center flex-shrink-0">
                        <div
                            class="bg-[#36e3c1] w-12 h-12 sm:w-16 sm:h-16 flex me-2 items-center justify-center font-bold text-[#222933] text-xl sm:text-2xl flex-shrink-0 overflow-hidden">
                            <img src="/bar.png" alt="Logo" class="w-full h-full object-cover" />
                        </div>
                        <div class="inset-0 flex items-center justify-center">
                            <span class="font-bold text-2xl sm:text-3xl text-white">57%</span>
                        </div>
                    </div>

                    <div>
                        <div class="flex flex-row items-center flex-shrink-0">
                            <div
                                class="bg-[#36e3c1] w-10 h-10 sm:w-14 sm:h-14 flex me-3 sm:me-4 items-center justify-center font-bold text-[#222933] text-lg sm:text-2xl flex-shrink-0 overflow-hidden">
                                <img src="/uparrow.png" alt="Logo" class="w-full h-full object-cover" />
                            </div>
                            <div class="flex-col items-center justify-center">
                                <span class="font-bold text-xl sm:text-2xl text-white">UP 30%</span>
                                <div class="text-xs text-[#a5acad] text-center leading-tight">FROM LAST WEEK</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-x-8 gap-y-4 sm:gap-y-6 text-xs mb-4">
                    <div class="flex flex-col border-l-2 border-[#ffd700] pl-2">
                        <span class="text-[#ffd700] leading-tight text-xs">PARTIALLY COMPLETE</span>
                        <span class="text-[#a5acad] text-base sm:text-lg font-medium">38%</span>
                    </div>

                    <div class="flex flex-col pl-2">
                        <span class="text-[#ffd700] leading-tight text-xs">RAN OUT OF TIME</span>
                        <div class="flex items-center space-x-1 sm:space-x-2">
                            <span class="text-[#a5acad] text-base sm:text-lg font-medium">15%</span>
                            <span>
                                <img src="/suparrow.png" alt="Up Arrow" class="w-4 h-4 sm:w-5 sm:h-5" />
                            </span>
                        </div>
                    </div>

                    <div class="flex flex-col pl-2">
                        <span class="text-[#ffd700] leading-tight text-xs">INCORRECTLY SET</span>
                        <div class="flex items-center space-x-1 sm:space-x-2">
                            <span class="text-[#a5acad] text-base sm:text-lg font-medium">17%</span>
                            <span>
                                <img src="/suparrow.png" alt="Up Arrow" class="w-4 h-4 sm:w-5 sm:h-5" />
                            </span>
                        </div>
                    </div>

                    <div class="flex flex-col pl-2">
                        <span class="text-[#ffd700] leading-tight text-xs">DIDN'T WANT TO</span>
                        <div class="flex items-center space-x-1 sm:space-x-2">
                            <span class="text-[#a5acad] text-base sm:text-lg font-medium">6%</span>
                            <span>
                                <img src="/downarrow.png" alt="Down Arrow" class="w-5 h-5 sm:w-5 sm:h-5" />
                            </span>
                        </div>
                    </div>


                    <div class="flex flex-col border-l-2 border-[#ffd700] pl-2">
                        <span class="text-[#ffd700] leading-tight text-xs">PARTIALLY COMPLETE</span>
                        <span class="text-[#a5acad] text-base sm:text-lg font-medium">38%</span>
                    </div>

                    <div class="flex flex-col pl-2">
                        <span class="text-[#ffd700] leading-tight text-xs">RAN OUT OF TIME</span>
                        <div class="flex items-center space-x-1 sm:space-x-2">
                            <span class="text-[#a5acad] text-base sm:text-lg font-medium">15%</span>
                            <span>
                                <img src="/suparrow.png" alt="Up Arrow" class="w-4 h-4 sm:w-5 sm:h-5" />
                            </span>
                        </div>
                    </div>

                    <div class="flex flex-col pl-2">
                        <span class="text-[#ffd700] leading-tight text-xs">INCORRECTLY SET</span>
                        <div class="flex items-center space-x-1 sm:space-x-2">
                            <span class="text-[#a5acad] text-base sm:text-lg font-medium">17%</span>
                            <span>
                                <img src="/suparrow.png" alt="Up Arrow" class="w-4 h-4 sm:w-5 sm:h-5" />
                            </span>
                        </div>
                    </div>

                    <div class="flex flex-col pl-2">
                        <span class="text-[#ffd700] leading-tight text-xs">DIDN'T WANT TO</span>
                        <div class="flex items-center space-x-1 sm:space-x-2">
                            <span class="text-[#a5acad] text-base sm:text-lg font-medium">6%</span>
                            <span>
                                <img src="/downarrow.png" alt="Down Arrow" class="w-5 h-5 sm:w-5 sm:h-5" />
                            </span>
                        </div>
                    </div>

                </div>
            </div>

            <button @click="goNext"
                class="w-[120px] sm:w-[130px] bg-[#36e3c1] text-[#222933] rounded-full px-4 sm:px-6 py-2 font-semibold hover:bg-[#25bb9d] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#36e3c1] focus:ring-opacity-50">
                NEXT
            </button>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goNext() {
    router.push('/stageone')
}
</script>

<style scoped>
@media (max-width: 640px) {
    .bg-\[\#222933\] {
        margin: 1rem;
    }
}
</style>
