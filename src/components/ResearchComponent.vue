<template>
    <div id="innercontainer" style="width:98%;height:100%;margin:0 auto">


        <div id="ResearchProjects" align="left" >
            <p style="font-size:27px;margin-top:10px;">Research Projects</p>
            <div id="Project1">
                <a-space direction="vertical">
                    <a-typography-link style="font-size:20px;margin-top:20px;" href="https://philjohnrose.net/Wu_tones/Wu_citation_tones/Wu_sites_ZJ_JS.html" target="_blank">
                        <right-outlined></right-outlined>
                        Wu tone map
                    </a-typography-link>
                    <a-typography-text strong style="font-size: 15px">From October 2021 - March 2022</a-typography-text>
                </a-space>
                <p style="font-size:18px; margin-top: 10px">
                    These are some good stuff Phil has been working on for decades. I offered him fieldwork recordings in
                    six Chinese Wu sites (some at the putative boundary of left and right dominant tone sandhi speaking places).
                    They are Jinshan and Songjiang in Shanghai, and Huzhou, Zhuji, Shengzhou and Shangyu in Zhejiang.
                </p>
            </div>

            <div id="Project2">
                <p style="font-size:20px; color:#0096FF; margin-top:20px;">
                    Documentation and analysis of Hainan dialect
                </p>
                <p style="font-size:15px;margin-top:-20px; font-Weight:bold;">
                    From December 2022 - present
                </p>
                <p style="font-size:18px; margin-top: -10px">
                    These are some good stuff Phil has been working on for decades. I offered him fieldwork recordings in
                    six Chinese Wu sites (some at the putative boundary of left and right dominant tone sandhi speaking places).
                    They are Jinshan and Songjiang in Shanghai, and Huzhou, Zhuji, Shengzhou and Shangyu in Zhejiang.
                </p>
            </div>
        </div>

        <a-divider/>
        
    </div>
</template>

<script>
    import { RightOutlined } from '@ant-design/icons-vue';
    export default {
        name: 'HomeComponent',
        methods:{

        },
        components: {
            RightOutlined,
        },
    }
</script>