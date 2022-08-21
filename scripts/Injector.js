const js = hexo.extend.helper.get('js').bind(hexo);

// 自定义样式
hexo.extend.filter.register('theme_inject', function (injects) {
	injects.style.push('source/_data/Custom.styl');
});

// 添加备案号
hexo.extend.injector.register(
	'body_end',
	`
    <footer class="footer">
    <div class="footer-inner">
        <div id="Record">
<a class="RecordNumber TransitionOne" href="https://beian.miit.gov.cn/" target="_blank">黔ICP备2021007565号</a>
<a
class="PublicSecurityRecord TransitionOne"
href=" http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=52010202002678"
target="_blank">
贵公网安备 52010202002678号
</a>
</div>
</div>
</footer>


`
);

hexo.extend.injector.register(
	'body_end',
	`
<script src="/js/motion.js"></script>
`
);
