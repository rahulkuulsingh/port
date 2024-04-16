function NestedIntro() {
  return (
    <div className="rt-ContainerInner">
      <span data-state={``} className="rt-Text home-text rt-r-size-7 sm:rt-r-size-8 md:rt-r-size-8">
        Yo! I'm
        <span data-state="closed">
          <button type="button" className="reveal-trigger">
            Pedro
          </button>
          <span data-state={``} className="reveal-content">
            Duarte. I'm not sure how to intro myself
            <span data-state="closed">
              <button type="button" className="reveal-trigger">
                anymore
              </button>
              <span data-state={``} className="reveal-content">
                . My background is in UI development, but I love everything
                related to
                <span data-state="closed">
                  <button type="button" className="reveal-trigger">
                    product
                  </button>
                  <span data-state={``} className="reveal-content">
                    . In the last five years I discovered my niche: helping
                    early-stage tech startups flourish.
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </div>
  );
}
