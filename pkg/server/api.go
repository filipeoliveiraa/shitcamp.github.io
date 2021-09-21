package server

import (
	"net/http"
	"strings"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/shitcamp-unofficial/shitcamp/pkg/server/handlers"
)

const (
	gShitcamp = "/shitcamp"
	gTwitch   = "/twitch"
)

func newRouter(auth gin.Accounts) *gin.Engine {
	router := gin.Default()

	router.Use(
		cors.New(cors.Config{
			AllowMethods:     []string{http.MethodGet, http.MethodPost, http.MethodOptions},
			AllowHeaders:     []string{"Authorization"},
			AllowCredentials: true,
			AllowOriginFunc: func(origin string) bool {
				switch origin {
					case "https://shitcamp.github.io",
						"https://shitcamp-unofficial.github.io":
						return true

				default:
					return strings.HasPrefix(origin, "http://localhost")
				}
			},
			MaxAge: 12 * time.Hour,
		}),
		gin.BasicAuth(auth))

	api := router.Group("/api")

	// Routes
	shitcampRouter := api.Group(gShitcamp)
	{
		shitcampRouter.GET("/get_streamer_names", handlers.GetStreamerNames)
		shitcampRouter.GET("/get_streamers", handlers.GetStreamers)
		shitcampRouter.GET("/get_schedule", handlers.GetSchedule)
		shitcampRouter.POST("/set_schedule", handlers.SetSchedule)
		shitcampRouter.GET("/get_featured_users_for_vods", handlers.GetFeaturedUsersForVods)
		shitcampRouter.POST("/set_featured_users_for_vod", handlers.SetFeaturedUsersForVod)
		shitcampRouter.GET("/get_featured_users_for_streams", handlers.GetFeaturedUsersForStreams)
		shitcampRouter.POST("/set_featured_users_for_stream", handlers.SetFeaturedUsersForStream)
	}

	twitchRouter := api.Group(gTwitch)
	{
		twitchRouter.GET("/get_live_streams", handlers.GetLiveStreams)
		twitchRouter.GET("/get_vods", handlers.GetVods)
		twitchRouter.GET("/get_clips", handlers.GetClips)
	}

	return router
}